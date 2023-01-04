import Title from './components/Title/title'
import RunBox from './components/RunBox/RunBox';
import DocumentType from './components/DocumentTypes/DocumentTypes';
import FlagTypes from "./components/FlagTypes/FlagTypes";
import FlagTypesBlack from './components/FlagTypesBlack/FlagTypesBlack';
import Features from './components/Features/Features';
import FeaturesHeadline from './components/FeaturesHeadline/FeaturesHeadline';
import Assets from './components/Assets/Assets';
import Locale from './components/Locale/Locale';
import Results from './components/ResultsTable/Results';
import { useState } from 'react';
import './App.css'

interface TableEntry {
  entry: string;
  uuid: string;
  type: string;
  country: string;
  model: string;
}

const App = () => {
  const [showGreetingData, setShowGreetingData] = useState(false);
  const [closableData, setClosableData] = useState(true);
  const [showInstructionData, setShowInstructionData] = useState(false);
  const [faceMatchMobileOnlyData, setFaceMatchMobileOnlyData] = useState(false);
  const [documentTypesChangedData, setDocumentTypesChangedData] = useState(false);
  const [modalData, setModalData] = useState('modal');
  const [smsData, setSmsData] = useState(false);
  const [tableData, setTableData] = useState<TableEntry[]>([
]);

  return (
    <div className='main'>
      <Title />
      <div className='content'>

        <div className='content1'>
          <RunBox
            showGreeting={showGreetingData}
            closable={closableData}
            showInstruction={showInstructionData}
            faceMatchMobileOnly={faceMatchMobileOnlyData}
            documentTypesChanged={documentTypesChangedData}
            modalType={modalData}
            setTableData={setTableData} />
          {tableData.length === 0 && <div className='no-entries'> No entries yet</div>}
          {tableData.length !== 0 && <Results tableData={tableData} />}
        </div>

        <div className='content2'>
          <DocumentType documentTypesChanged={setDocumentTypesChangedData}
          showSms={smsData}/>
        </div>

        <div className='content3'>
          <FeaturesHeadline />
          <Locale modalType={setModalData}/>
          <Features showGreeting={setShowGreetingData} closable={setClosableData} showInstruction={setShowInstructionData} faceMatchMobileOnly={setFaceMatchMobileOnlyData} showSms={setSmsData} />
          <Assets />
        </div>

        <FlagTypes />
        <FlagTypesBlack />

      </div>
    </div>

  );
}

export default App;