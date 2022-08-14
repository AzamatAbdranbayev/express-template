<h1>Template Clean Architecture in Express Js</h1>

<ul>
<li>server.js</li>
<li>src

<ul>
<li>controllers</li>
<li>helpers</li>
<li>models</li>
<li>repositories</li>
<li>routes</li>
<li>services
<ul>
<li> logic</li>
<li> use-cases</li>
<li> infrastructure</li>
</ul>

</li>
</ul>
</li>
</ul>

Архитектура разработана с таким правилом, что:
<br>
<br>
каждому роуту присваивается свой ОДИН контроллер,
<br>
<br>
каждому контроллеру присваивается свой ОДИН бизнес сервис(logic). В данном сервисе предполагается вся бизнес логика задачи. Допустим удаление пользователя (условно) - нужно проверить отсутствие задолженности перед компанией , и только потом удалять пользователя. Что сделает данный сервис? Он пойдет к сервису проверки задолженности , и только потом к сервису удаления
<br>
<br>
каждый сервис имеет возможность вызывать use-cases сервисы
<br>
<br>
uce-cases сервисы это сервисы являющиеся оберткой над репозиториями (где происходит вызов сущностей Базы Данных)

<h2>Что можно было бы изменить или добавить?</h2>

1.

```
 department: {
    type: String,
    enum: ['finance', 'development', 'sales'],
},
jobTitle: {
    type: String,
    enum: ['director', 'senior', 'middle', 'junior', 'cto'],
},

```

Можно было бы выбрать другую схему сущности пользователей, например, что поле <b>department</b> являлось бы Mongo ObjectId от другой сущности <b>departments</b>. Но я считаю это было бы излишеством для маленькой компании (аналогично с полем <b>jobTitle</b>)

2. InfraStructure
   <br>
   Данную сущность (директория) я использую для подключения по http,tcp к другим сервисам, например к сервису авторизации или сервису оплаты (условно)

3. Helpers
   <br>
   Здесь я храню повторяющийся код (вызов ошибки, запись логов и т.д.)

4. Libs
   <br>
   Здесь я храню инициализацию внешних библиотек (инициализация подключения к rabbitMQ, minio)

5. Repository
   <br>
   На чтение данных через репозиторий я пробрасываю такие поля как filter, fields.
   Filter - Это объект с полями, по которым база будет искать
   <br>
   Fields - Это объект с полями, которые база будет возвращать (с целью оптимизации запросов, можно не возвращать весь документ, а только допустим поле {fullname:1})

6. Валидация
   <br>
   Я бы еще добавил валидацию тела запросов. Допустим через class-validator,express-validator
   <br>
   Добавил бы еще Typescript :)

<h4>Пример тела запроса</h4>

```
curl --location --request POST 'http://localhost:9000/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "passport":{
        "address":"Kazakhstan",
        "email":"aabdranbaye1v@gmail.com",
        "phone":"+7755555510",
        "telegram":"rfew1fe"
    },
    "fullName":"Аза Аза",
    "birthDay":"2022-08-02T09:06:18.075Z",
    "employmentDate":"2022-08-02T09:06:18.075Z",
    "department":"finance",
    "jobTitle":"senior"

}'
```
