import './RunBox.css'
import React, { useState, useEffect } from "react"
import WebSDK from "@verifai/websdk-react"
import otpKey from '../../images/secret.png'
import { uploadedTypes, documentTypes } from '../DocumentTypes/DocumentTypes'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function RunBox({ showGreeting, closable, showInstruction, faceMatchMobileOnly, documentTypesChanged, modalType,setTableData }) {
  const [data, setData] = useState([{}])
  const [show, setShow] = useState(false)
  const [disable, setDisable] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [resultData, setResultData] = useState("No result yet - please upload the document pictures first")

  useEffect(() => {
    fetch("/otp").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        {
          (typeof data.otp === 'undefined') ?
            (document.getElementById("textForm")! as HTMLInputElement).value = "Loading" :
            (document.getElementById("textForm")! as HTMLInputElement).value = data.otp[0]
        }
      }
    )
  }, [])
  const useRefreshPage = async () => {

    const valoare = await fetch('/otp', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },

    }).then((response) => response.json()).then((otp) => { return otp.otp });

    (document.getElementById("textForm")! as HTMLInputElement).value = valoare;
    data['otp'] = valoare;

  }

  useEffect(() => {
    refreshButtons()
  })

  useEffect(() => {
    refreshButtonsAndShowOtp()
  }, [documentTypesChanged])

  const refreshButtons = async () => {

    const valoare = await fetch('/otp', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },

    }).then((response) => response.json()).then((otp) => { return otp.otp });
    data['otp'] = valoare;
  }

  const refreshButtonsAndShowOtp = async () => {

    const valoare = await fetch('/otp', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },

    }).then((response) => response.json()).then((otp) => { return otp.otp });

    (document.getElementById("textForm")! as HTMLInputElement).value = valoare;
    data['otp'] = valoare;
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Result</h4>
          <p>
            {resultData}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className='run-box'> {/* Run container */}
      <>


        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>

      <div className="controls">
        <div className="start">
          <h4>Run</h4>
        </div>
        <div className='end'>
          <button
            type='submit'
            onClick={useRefreshPage}
            className="refreshButton">
            Refresh &#x21bb;
          </button>

          <button type='submit'
            onClick={() => { setShow(true); setDisable(true) }}
            className="refreshButton">
            Start &#10147;
          </button>
        </div>
      </div>

      <div className="search">
        <img src={otpKey} width={30} height={30} alt="key" />

        <input type="text" id='textForm' name="search" placeholder="OTP...." />

        <div className="fetch">
          &#11015;
          <input type="checkbox" name="checkbox" />
        </div>

        <div className="delete">
          &#128465;
          <input type="checkbox" name="checkbox" />
        </div>
      </div>
      <div>
      </div>

      <WebSDK
        token={data['otp']}

        show={show}
        showGreeting={showGreeting}
        closable={closable}
        showInstruction={showInstruction}
        faceMatchMobileOnly={faceMatchMobileOnly}
        display={modalType}

        uploadTypes={uploadedTypes}

        onSuccess={(sessionID: any) => {
          setShow(false)
          fetch("/result/" + sessionID).then(
            res => res.json()
          ).then(
            res => {
              setResultData(JSON.stringify(res));
              setTableData((data) => {
                return [...data, {...res.idModel}]
              })
            }
          )
        }}

        onCanceled={(sessionID: any) => {
          setShow(false)
        }
        }
      />
    </div>
  )
}