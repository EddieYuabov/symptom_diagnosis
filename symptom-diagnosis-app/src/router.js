import InputComponent from './components/Input'
import EditSymptom from './components/EditSymptom'
import SymptomComponent from './components/Symptoms'
import EditDiagnosis from './components/EditDiagnosis'
import DiagnosisComponent from './components/Diagnosis'
import { createWebHistory, createRouter } from 'vue-router'
import SymptomsDetails from './components/Symptoms_Details'
import DiagnosisDetails from './components/Diagnosis_Details'

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
    path: '/symptoms/edit/:symptom_id',
    component: EditSymptom,
    name: 'EditSymptom'
  },
  {
    path: '/diagnosis/:diagnosis_id',
    component: DiagnosisDetails,
    name: 'DiagnosisDetails'
  },
  {
    path: '/diagnosis/edit/:diagnosis_id',
    component: EditDiagnosis,
    name: 'EditDiagnosis'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
