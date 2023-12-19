import { Teacher, Student, ClassRoom } from "@prisma/client";
import { connectDB, prisma } from "./config/db";
import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 3006;

app.use(express.json());
connectDB();

app.get("/class/get/all", async (req: Request, res: Response) => {
  const classes = await prisma.classRoom.findMany();
  res.json(classes);
});

app.get("/class/get/with_id/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const classes = await prisma.classRoom.findMany({ where: { id: id },select:{name:true,id:true,teacher:true,student:true} });
  res.json(classes);
});

app.post("/class/add/new", async (req: Request, res: Response) => {
  const newStudent = req.body as ClassRoom;
  await prisma.classRoom.create({
    data: newStudent,
  });
  res.json("ClassRoom is Create");
});

// Teacher

app.get("/teacher/get/all", async (req: Request, res: Response) => {
  const teachers = await prisma.teacher.findMany({select:{id:true,username:true,phone:true,Specialization:true,classRoom:{select:{name:true}}}});
  res.json(teachers);
});

app.post("/teacher/add/new", async (req: Request, res: Response) => {
  const newTeacher = req.body as Teacher;
  await prisma.teacher.create({ data: newTeacher });
  res.json("New Teacher Is Added");
});

// Student

app.get("/student/get/all", async (req: Request, res: Response) => {
  const students = await prisma.student.findMany();
  res.json(students);
});

app.post("/student/add/new", async (req: Request, res: Response) => {
  const student = req.body as Student;
  await prisma.student.create({ data: student });
  res.json("New Student Is Added");
});

app.listen(PORT, () => {
  console.log(`Server Listing ${PORT}`);
});
