import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        category: {
            type: String,
        },
        amount: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        isSpecial: {
            type: Boolean,
        }
    },
    {
        timestamps: true,
    }
)

export const Transaction = mongoose.model('Transactions', transactionSchema);