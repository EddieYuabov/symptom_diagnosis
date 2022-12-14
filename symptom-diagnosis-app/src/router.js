import InputComponent from './components/Input'
import SymptomComponent from './components/Symptoms'
import DiagnosisComponent from './components/Diagnosis'
import SymptomsDetails from './components/Symptoms_Details'
import DiagnosisDetails from './components/Diagnosis_Details'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: InputComponent, name: 'InputComponent' },
  { path: '/symptoms', component: SymptomComponent, name: 'SymptomComponent' },
  {
    path: '/diagnoses',
    component: DiagnosisComponent,
    name: 'DiagnosisComponent'
  },
  {
    path: '/symptoms/:symptom_id',
    component: SymptomsDetails,
    name: 'SymptomDetails'
  },
  {
    path: '/diagnosis/:diagnosis_id',
    component: DiagnosisDetails,
    name: 'DiagnosisDetails'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
