import './Features.css'
import { Switch, TextInput } from '@mantine/core';
import { useState } from 'react';


const modifyFaceMatching = (faceMatching: boolean) => {
    fetch("/modifyFace", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(faceMatching)
    })
        .then(function (response) {
            return response.json();
        })
}

const modifyPrivacy = (privacy: boolean) => {
    fetch("/modifyPrivacy", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(privacy)
    })
        .then(function (response) {
            return response.json();
        })
}

export default function Features({showGreeting, closable, showInstruction, faceMatchMobileOnly,showSms}) {

  const [showGreetingData, setShowGreetingData] = useState(true);
  const [closableData, setClosableData] = useState(false);
  const [showInstructionData, setShowInstructionData] = useState(true);
  const [faceMatchMobileOnlyData, setFaceMatchMobileOnlyData] = useState(true);
  const [showSmsData, setShowSmsData] = useState(true);
  const [privacyFilterData, setPrivacyFilterData] = useState(true);

  return (

    <div className='features'> {/* Features */}


      <div className='feature-buttons'>

        <div className='buttons-f3'>

          <div className='button-sms'>

            <Switch onLabel="ON" offLabel="OFF" size='md'
              label="Sms Show"
              color="cyan"
              onClickCapture={() => {
                setShowSmsData(!showSmsData)
                showSms(showSmsData)}}
            />
          </div>

          <div className='button-show'>

            <Switch onLabel="ON" offLabel="OFF" size='md'
              label="Show instructions"
              color="cyan"
              onClickCapture={() => {
                setShowInstructionData(!showInstructionData)
                showInstruction(showInstructionData)}}
            />
          </div>

          <div className='button-closable'>

            <Switch onLabel="ON" offLabel="OFF" size='md' defaultChecked 
              label="Closable Modal"
              color="cyan"
              onClickCapture={() => {
                setClosableData(!closableData)
                closable(closableData)}}

            />
          </div>

        </div>

        <div className='buttons-l3'>

          <div className='button-greeting'>

            <Switch onLabel="ON" offLabel="OFF" size='md'
              label="Show Greeting"
              color="cyan"
              onClickCapture={() => {
                setShowGreetingData(!showGreetingData)
                showGreeting(showGreetingData)}}

            />
          </div>

          <div className='button-edit'>

            <Switch onLabel="ON" offLabel="OFF" size='md'
              label="Privacy Filters"
              color="cyan"
              onClickCapture={()=>{
              setPrivacyFilterData(!privacyFilterData)
              modifyPrivacy(privacyFilterData)
              }}

            />
          </div>
          <div className='button-face'>

            <Switch onLabel="ON" offLabel="OFF" size='md'
              label="Face Match"
              color="cyan"
              onClickCapture={() => {
                setFaceMatchMobileOnlyData(!faceMatchMobileOnlyData)
                faceMatchMobileOnly(faceMatchMobileOnlyData)
                modifyFaceMatching(faceMatchMobileOnlyData)}}

            />

          </div>
        </div>


      </div>

      <div className='nonce'>

        <TextInput
          placeholder="Nonce"
          label="Nonce"
          radius="xl"
          size="md"
          styles={{
            input : { color : 'gray'}
          }}
        
          required
        />
      </div>
    </div>
  )
}