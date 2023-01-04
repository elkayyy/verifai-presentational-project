import './Locale.css'
import { MantineProvider, Select, SelectItem } from "@mantine/core";
import { useState } from "react";
import Flag from 'react-world-flags';
import { FiArrowDownLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";


const modifyLocale = (localeSelected: string) => {
    fetch("/modifyLocale", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(localeSelected)
    })
        .then(function (response) {
            return response.json();
        })
}

export default function Locale({modalType}) {

    const countries: SelectItem[] = [ //Country list
        { value: 'en_US', label: 'English (US)' },
        { value: 'en_GB', label: 'English (GB)' },
        { value: 'nl_NL', label: 'Dutch' },
        { value: 'de_DE', label: 'German' },
        { value: 'ar_SA', label: 'Arabic' },
        { value: 'bg_BG', label: 'Bulgarian' },
        { value: 'cs_CZ', label: 'Czech' },
        { value: 'da_DK', label: 'Danish' },
        { value: 'es_ES', label: 'Spanish' },
        { value: 'fi_FI', label: 'Finnish' },
        { value: 'fr_FR', label: 'French' },
        { value: 'el_GR', label: 'Greek' },
        { value: 'hr_HR', label: 'Croatian' },
        { value: 'ko_KR', label: 'Korean' },
        { value: 'no_NO', label: 'Norwegian' },
        { value: 'pl_PL', label: 'Polish' },
        { value: 'pt_PT', label: 'Portoguese' },
        { value: 'ro_RO', label: 'Romanian' },
        { value: 'sv_SE', label: 'Swedish' },
        { value: 'tr_TR', label: 'Turkish' },

    ];

    const modal: SelectItem[] = [

     
        { value: 'modal', label: 'Modal' },
        { value: 'inline', label: 'Inline' },

    ];

    const final : SelectItem[] =[

        { value: 'Original Image', label: 'Original Image'},
        { value: 'Cropped Image', label: 'Cropped Image' },
        { value: 'Original & Cropped Images', label: 'Original & Cropped Images' },
    
    ];

    const [flag, setFlag] = useState("en_US");
    const [icon, setIcon] = useState("modal");
    const [finalImage, setFinalImage] = useState("Original Image");

    return (

        <div className='Locale'> {/* LocaleTab */}

            <Select
                label="Locale"
                data={countries}
                value={flag}
                onChange={setFlag}
                icon={<Flag code={flag.substring(3)} height="12" />}
                onSelect={()=>modifyLocale(flag)}
            />

            <Select
                label="Display"
                data = {modal}
                value = {icon}
                onChange={(icon: string) => {setIcon(icon)
                modalType(icon)}}
                icon = {<FiArrowDownLeft/>}
            />

            <Select
                label="Final Image Result"
                data = {final}
                value = {finalImage}
                onChange={(finalImage: string) => setFinalImage(finalImage)}
              
            />

        </div>

    )
}