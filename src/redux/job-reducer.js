import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: { jobInfo: {} }
}

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        addJobData: (state, action) => {
            if (action.payload) {
                state.data.jobInfo = { ...action.payload }
            }
        }
    }
});

export const { addJobData } = jobSlice.actions;
export default jobSlice;