import { AnyAction } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullName: '',
  contacts: {
    email: '',
    gitFlic: '',
    gitHub: '',
    phoneNumber: '',
    vk: '',
  },
  education: [{
    eduType: '',
    eduDescription: '',
  }],
  experience: [{
    expType: '',
    expDescription: '',
  }],
  skills: [{
    skillName: '',
    skillIcon: '',
  }],
  avatar: '',
  resumeLink: '',
  projectLink: '',
}

export type State = typeof initialState

const persData = createSlice({
  name: 'personal-data',
  initialState,
  reducers: {
    setCandidateData: (state, action: AnyAction) => {
      state.fullName = action.payload.full_name
      state.contacts.email = action.contacts.payload.email
      state.contacts.gitFlic = action.payload.contacts.git_flic
      state.contacts.gitHub = action.payload.contacts.git_hub
      state.contacts.phoneNumber = action.payload.contacts.phone_number
      state.contacts.vk = action.payload.contacts.vk
      state.education = [...action.payload.education.edu_type]
      state.experience = [...action.payload.experience.exp_type]
      state.experience = [...action.payload.experience.exp_description]
      state.skills = [...action.payload.skills.skill_name]
      state.avatar = action.payload.avatar
      state.resumeLink = action.payload.resume_link
      state.projectLink = action.payload.project_link
    }
  }
})

export const { setCandidateData } = persData.actions

export default persData.reducer
