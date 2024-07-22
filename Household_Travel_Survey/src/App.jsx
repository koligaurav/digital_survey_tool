import { useState } from 'react'

import './App.css'
import Initial from './components/initial/Initial'

import EnumeratorForm from './components/first/EnumeratorForm'
import Address from './components/second/Address'
import HouseDetailsForm from './components/third/HouseDetailsForm'
import NumberOfPersonsForm from './components/fourth/NumberOfPersonsForm '
import SupportForTravelForm from './components/fifth/SupportForTravelForm '
import VehicleForm from './components/sixth/VehicleForm'
import VehicleNumber from './components/sixth/VehicleNumber'
import EmployerNumber from './components/sixth/EmployerNumber'
import IncomeForm from './components/seventh/IncomeForm'
import DeliveryForm from './components/eight/DeliveryForm'
import PersonInfo from './components/Gender_Age_Relation_Eduction/PersonInfo'
import Form from './components/form/Form'
import SurveyForm from './components/surveyForm/SurveyForm'
import SurveyFormPart1 from './components/transportModes/SurveyFormPart1'
import SurveyFormPart2 from './components/transportModes/SurveyFromPart2'
import SurveyFormPart3 from './components/transportModes/SurveyFormPart3'
import TransitPassForm from './components/transit/TransitPassForm'
import OutOfHomeActivityDiary from './components/OutOfHomeActivityDiary/OutOfHomeActivityDiary'
import OutOfHomeActivityDiary1 from './components/OutOfHomeActivityDiary/OutOfHomeActivityDiary1'
import HouseholdReferenceForm from './components/HouseholdReferenceForm/HouseholdReferenceForm'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <h1 className='header1'>Household Travel Survey</h1>
     </div>
     <Initial/>
     <HouseholdReferenceForm/>
     <EnumeratorForm/>
     <div>
      <h1 className='header1'>Household Information</h1>
     </div>
     <Address/>
     <HouseDetailsForm/>
     <NumberOfPersonsForm/> 
     <SupportForTravelForm/>
     <VehicleForm/>
     <VehicleNumber/>
     <EmployerNumber/>
     <IncomeForm/>
     <DeliveryForm/>
     <div >
      <h1 className="header1">Person-1 Information</h1>
     </div>
    
      <PersonInfo />
   
    <Form/>
    <SurveyForm/>
    <SurveyFormPart2/>
    <SurveyFormPart1/>
    <TransitPassForm/>
    <div>
      <h className="header1"> Out-of-home Activity Diary (Person 1-Trip 1)</h>
    </div>
    <OutOfHomeActivityDiary/>
    <div>
      <h className="header1"> Out-of-home Activity Diary (Person 1-Trip 2)</h>
    </div>
    <OutOfHomeActivityDiary1/>
   
   
    
   
      
    </>
  )
}

export default App
