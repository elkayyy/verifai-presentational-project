import { MultiSelect } from '@mantine/core';
import './DocumentTypes.css'
import uploadDoc from '../../images/upload.png'
import fileDoc from '../../images/file.png'
import { useState } from 'react';

let documentTypes: string[] = [];
let uploadedTypes: any[] = [];

export default function DocumentType({documentTypesChanged,showSms}) {
    const modifyDocumentsTypes = () => {
        setDocumentTypesChangedData(!documentTypesChangedData)
        documentTypesChanged(documentTypesChangedData)
        fetch("/modify", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(documentTypes)
        })
    }

    const [value, setValue] = useState([]);
    const [value2, setValue2] = useState([]);
    const [documentTypesChangedData, setDocumentTypesChangedData] = useState(true);

    documentTypes=value;
    
    if(value2.includes('Phone')){
        uploadedTypes=[...value2];
        uploadedTypes[uploadedTypes.indexOf('Phone')]=['Phone',{showSms:showSms}]
    }
    else{
        uploadedTypes=[...value2];
    }
    return (
        <div className="types">
            <div className="document">
                    <img src={fileDoc} width={30} height={30} />
                    <MultiSelect
                        className="multi-select"
                        data={[
                    { value: 'P', label: 'Passport' },
                    { value: 'I', label: 'Id Card' },
                    { value: 'D', label: 'Drivers Licence' },
                    { value: 'RP', label: 'Residence Permit' },
                    { value: 'R', label: 'Refugee' },
                    ]}
                        label="Document types"
                        placeholder="document type..."
                        defaultValue={['react', 'next']}
                        clearButtonLabel="Clear selection"
                        clearable
                        value={value}
                        onChange={setValue}
                        onDropdownClose={modifyDocumentsTypes}
                    />
            </div>
            <div className="upload">
                    <img src={uploadDoc} width={30} height={30} />
                    <MultiSelect
                        className="multi-select"
                        data={['File', 'Phone', 'Webcam']}
                        label="Upload Types"
                        placeholder="upload type..."
                        defaultValue={['react', 'next']}
                        clearButtonLabel="Clear selection"
                        clearable
                        value={value2}
                        onChange={(data) => {
                            setValue2(data);}}
                    />
            </div>
        </div>
    )
}

export { uploadedTypes, documentTypes };