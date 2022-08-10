import {
  SET_CANDIDATE_DATA,
} from 'service/constants'
import { AnyAction } from 'redux'

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

const defaultAction: AnyAction = {
  type: '',
  payload: '',
}

const persDataReducer = (state: State = initialState, action: AnyAction = defaultAction) => {
  switch (action.type) {
    case SET_CANDIDATE_DATA:
      return {
        ...state,
        fullName: action.payload.full_name,
        contacts: {
          email: action.contacts.payload.email,
          gitFlic: action.payload.contacts.git_flic,
          gitHub: action.payload.contacts.git_hub,
          phoneNumber: action.payload.contacts.phone_number,
          vk: action.payload.contacts.vk,
        },
        education: {
          eduType: action.payload.education.edu_type,
          eduDescription: action.payload.education.edu_description,
        },
        experience: {
          expType: action.payload.experience.exp_type,
          expDescription: action.payload.experience.exp_description,
        },
        skills: {
          skillName: action.payload.skills.skill_name,
        },
        avatar: action.payload.avatar,
        resumeLink: action.payload.resume_link,
        projectLink: action.payload.project_link,
      }
    default:
      return {
        ...state
      }
  }
}

export default persDataReducer
