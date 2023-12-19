<h1 style="text-align:center">School System Using Express And Prisma DB</h1>
<hr>

> [!IMPORTANT]  
> `Make .env File And Download Packages`

<h3>Download Packages</h3>

```cmd
$ npm i
```

<hr>

<h3>Upload schema.prisma To Database</h3>

```cmd
$ npx prisma db push
```

<hr>

.env File

```env
DATABASE_URL="mysql://USER_NAME:PASSWORD@IP:PORT/DATABASE_NAME"
```

<hr>

<h2>Routs To Use All Functions</h2>

<h3>Class</h3>

| Path                                | Methods |
| ----------------------------------- | ------- |
| `/class/get/all`                    | `GET`   |
| `/class/get/with_id/ENTER_CLASS_ID` | `GET`   |
| `/class/add/new`                    | `POST`  |

<h3>How Add New Class with json</h3>

```json
{
  "name": "class_1"
}
```

<hr>

<h3>Student</h3>

| Path               | Methods |
| ------------------ | ------- |
| `/student/get/all` | `GET`   |
| `/student/add/new` | `POST`  |

<h3>How Add New Student with json</h3>

```json
{
  "username": "STUDENT_NAME",
  "classRoom_id": "CLASS_ID"
}
```

<hr>

<h3>Teacher</h3>

| Path               | Methods |
| ------------------ | ------- |
| `/student/get/all` | `GET`   |
| `/student/add/new` | `POST`  |

<h3>How Add New Teacher with json</h3>

```json
{
  "username": "TEACHER_NAME",
  "phone": "TEACHER_PHONE_NUMBER",
  "Specialization": "TEACHER_SPECILICATION",
  "classRoom_id": "CLASS_ID"
}
```

<hr>

> [!NOTE]  
> `You Need To Connect With Database And Push Prisma db`

<hr>
# Documentation

- [Node.Js](nodejs.org)
- [Prisma](https://www.prisma.io/)
- [Azure Studio](https://learn.microsoft.com/en-us/azure-data-studio/download-azure-data-studio?view=sql-server-ver16&tabs=win-install%2Cwin-user-install%2Credhat-install%2Cwindows-uninstall%2Credhat-uninstall)
- [Xampp](https://www.apachefriends.org/download.html)
- [Postman](https://www.postman.com/downloads/)