import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const TaskSchema = new Schema({
  title: String,
  body: String,
  date: Date,
});

const TaskModel = mongoose.model('Task', TaskSchema);
export default TaskModel;
