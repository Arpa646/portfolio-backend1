// models/Skill.ts
import mongoose, { Document } from 'mongoose';

// Skill Interface
export interface ISkill extends Document {
 
  iconUrl: string;
  createdAt: Date;
}

// Skill Schema
const SkillSchema = new mongoose.Schema<ISkill>({
 
  iconUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<ISkill>('Skill', SkillSchema);
