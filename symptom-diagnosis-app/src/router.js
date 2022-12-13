import InputComponent from './components/Input'
import SymptomComponent from './components/Symptoms'
import DiagnosisComponent from './components/Diagnosis'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: InputComponent, name: 'InputComponent' },
  { path: '/symptoms', component: SymptomComponent, name: 'SymptomComponent' },
  {
    path: '/diagnoses',
    component: DiagnosisComponent,
    name: 'DiagnosisComponent'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
