import mongoose, {Document} from "mongoose";

interface IUser extends Document {
    username: string,
    password: string
}

const userSchema = new mongoose.Schema<IUser>({
    username: {type: String, required: true },
    password: {type: String, required: true }
});

export default mongoose.model<IUser>('User: ', userSchema);