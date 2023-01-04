import { forwardRef } from 'react';
import {
  MultiSelect,
  MultiSelectProps,
  Box,
  CloseButton,
  SelectItemProps,
  MultiSelectValueProps,
} from '@mantine/core';
import Flag from 'react-world-flags';
import { FaFlag } from 'react-icons/fa';
import { useState } from 'react';

const countriesData = [
  { label: 'US', value: 'US' },
  { label: 'GB', value: 'GB' },
  { label: 'FI', value: 'FI' },
  { label: 'FR', value: 'FR' },
  { label: 'AS', value: 'AS' },
  { label: 'AF', value: 'AF' },
  { label: 'AL', value: 'AL' },
  { label: 'DZ', value: 'DZ' },
  { label: 'AD', value: 'AD' },
  { label: 'AO', value: 'AO' },
  { label: 'AI', value: 'AI' },
  { label: 'AQ', value: 'AQ' },
  { label: 'AG', value: 'AR' },
  { label: 'AM', value: 'AM' },
  { label: 'AW', value: 'AW' },
  { label: 'AU', value: 'AU' },
  { label: 'AT', value: 'AT' },
  { label: 'AZ', value: 'AZ' },
  { label: 'BS', value: 'BS' },
  { label: 'BH', value: 'BH' },
  { label: 'BD', value: 'BD' },
  { label: 'BB', value: 'BB' },
  { label: 'BY', value: 'BY' },
  { label: 'BE', value: 'BE' },
  { label: 'BZ', value: 'BZ' },
  { label: 'BJ', value: 'BJ' },
  { label: 'BM', value: 'BM' },
  { label: 'BT', value: 'BT' },
  { label: 'BO', value: 'BO' },
  { label: 'BQ', value: 'BQ' },
  { label: 'BA', value: 'BA' },
  { label: 'BW', value: 'BW' },
  { label: 'BV', value: 'BV' },
  { label: 'BR', value: 'BR' },
  { label: 'IO', value: 'IO' },
  { label: 'BN', value: 'BN' },
  { label: 'BG', value: 'BG' },
  { label: 'BF', value: 'BF' },
  { label: 'BI', value: 'BI' },
  { label: 'CV', value: 'CV' },
  { label: 'KH', value: 'KH' },
  { label: 'CM', value: 'CM' },
  { label: 'CA', value: 'CA' },
  { label: 'KY', value: 'KY' },
  { label: 'CF', value: 'CF' },
  { label: 'TD', value: 'TD' },
  { label: 'CL', value: 'CL' },
  { label: 'CN', value: 'CN' },
  { label: 'CX', value: 'CX' },
  { label: 'CC', value: 'CC' },
  { label: 'CO', value: 'CO' },
  { label: 'KM', value: 'KM' },
  { label: 'CD', value: 'CD' },
  { label: 'CG', value: 'CG' },
  { label: 'CK', value: 'CK' },
  { label: 'CR', value: 'CR' },
  { label: 'HR', value: 'HR' },
  { label: 'CU', value: 'CU' },
  { label: 'CW', value: 'CW' },
  { label: 'CY', value: 'CY' },
  { label: 'CZ', value: 'CZ' },
  { label: 'CI', value: 'CI' },
  { label: 'DK', value: 'DK' },
  { label: 'DJ', value: 'DJ' },
  { label: 'DM', value: 'DM' },
  { label: 'DO', value: 'DO' },
  { label: 'EC', value: 'EC' },
  { label: 'EG', value: 'EG' },
  { label: 'SV', value: 'SV' },
  { label: 'GQ', value: 'GQ' },
  { label: 'ER', value: 'ER' },
  { label: 'EE', value: 'EE' },
  { label: 'SZ', value: 'SZ' },
  { label: 'ET', value: 'ET' },
  { label: 'FK', value: 'FK' },
  { label: 'FO', value: 'FO' },
  { label: 'FJ', value: 'FJ' },
  { label: 'PF', value: 'PF' },
  { label: 'GF', value: 'GF' },
  { label: 'TF', value: 'TF' },
  { label: 'GA', value: 'GA' },
  { label: 'GM', value: 'GM' },
  { label: 'GE', value: 'GE' },
  { label: 'DE', value: 'DE' },
  { label: 'GI', value: 'GI' },
  { label: 'GL', value: 'GL' },
  { label: 'GR', value: 'GR' },
  { label: 'GD', value: 'GD' },
  { label: 'GU', value: 'GU' },
  { label: 'GT', value: 'GT' },
  { label: 'GG', value: 'GG' },
  { label: 'GN', value: 'GN' },
  { label: 'GW', value: 'GW' },
  { label: 'GY', value: 'GY' },
  { label: 'HT', value: 'HT' },
  { label: 'HM', value: 'HM' },
  { label: 'VA', value: 'VA' },
  { label: 'HN', value: 'HN' },
  { label: 'HK', value: 'HK' },
  { label: 'HU', value: 'HU' },
  { label: 'IS', value: 'IS' },
  { label: 'IN', value: 'IN' },
  { label: 'ID', value: 'ID' },
  { label: 'IR', value: 'IR' },
  { label: 'IQ', value: 'IQ' },
  { label: 'IE', value: 'IE' },
  { label: 'IM', value: 'IM' },
  { label: 'IL', value: 'IL' },
  { label: 'IT', value: 'IT' },
  { label: 'JM', value: 'JM' },
  { label: 'JP', value: 'JP' },
  { label: 'JE', value: 'JE' },
  { label: 'JO', value: 'JO' },
  { label: 'KZ', value: 'KZ' },
  { label: 'KE', value: 'KE' },
  { label: 'KI', value: 'KI' },
  { label: 'KP', value: 'KP' },
  { label: 'KR', value: 'KR' },
  { label: 'KW', value: 'KW' },
  { label: 'KG', value: 'KG' },
  { label: 'LA', value: 'LA' },
  { label: 'LV', value: 'LV' },
  { label: 'LB', value: 'LB' },
  { label: 'LS', value: 'LS' },
  { label: 'LR', value: 'LR' },
  { label: 'LY', value: 'LY' },
  { label: 'LI', value: 'LI' },
  { label: 'LT', value: 'LT' },
  { label: 'LU', value: 'LU' },
  { label: 'MO', value: 'MO' },
  { label: 'MG', value: 'MG' },
  { label: 'MW', value: 'MW' },
  { label: 'MY', value: 'MY' },
  { label: 'MV', value: 'MV' },
  { label: 'ML', value: 'MT' },
  { label: 'MH', value: 'MH' },
  { label: 'MQ', value: 'MQ' },
  { label: 'MR', value: 'MR' },
  { label: 'MU', value: 'MU' },
  { label: 'YT', value: 'YT' },
  { label: 'MX', value: 'MX' },
  { label: 'FM', value: 'FM' },
  { label: 'MD', value: 'MD' },
  { label: 'MC', value: 'MC' },
  { label: 'MN', value: 'MN' },
  { label: 'ME', value: 'ME' },
  { label: 'MS', value: 'MS' },
  { label: 'MA', value: 'MA' },
  { label: 'MZ', value: 'MZ' },
  { label: 'MM', value: 'MM' },
  { label: 'NA', value: 'NA' },
  { label: 'NR', value: 'NR' },
  { label: 'NP', value: 'NP' },
  { label: 'NL', value: 'NL' },
  { label: 'NC', value: 'NC' },
  { label: 'NZ', value: 'NZ' },
  { label: 'NI', value: 'NI' },
  { label: 'NE', value: 'NE' },
  { label: 'NG', value: 'NG' },
  { label: 'NU', value: 'NU' },
  { label: 'NF', value: 'NF' },
  { label: 'MP', value: 'MP' },
  { label: 'NO', value: 'NO' },
  { label: 'OM', value: 'OM' },
  { label: 'PK', value: 'PK' },
  { label: 'PW', value: 'PW' },
  { label: 'PS', value: 'PS' },
  { label: 'PA', value: 'PA' },
  { label: 'PG', value: 'PG' },
  { label: 'PY', value: 'PY' },
  { label: 'PE', value: 'PE' },
  { label: 'PH', value: 'PH' },
  { label: 'PN', value: 'PN' },
  { label: 'PL', value: 'PL' },
  { label: 'PT', value: 'PT' },
  { label: 'PR', value: 'PR' },
  { label: 'QA', value: 'QA' },
  { label: 'MK', value: 'MK' },
  { label: 'RO', value: 'RO' },
  { label: 'RW', value: 'RW' },
  { label: 'RU', value: 'RU' },
  { label: 'RE', value: 'RE' },
  { label: 'BL', value: 'BL' },
  { label: 'SH', value: 'SH' },
  { label: 'KN', value: 'KN' },
  { label: 'LC', value: 'LC' },
  { label: 'MF', value: 'MF' },
  { label: 'PM', value: 'PM' },
  { label: 'VC', value: 'VC' },
  { label: 'WS', value: 'WS' },
  { label: 'SM', value: 'SM' },
  { label: 'ST', value: 'ST' },
  { label: 'SA', value: 'SA' },
  { label: 'SN', value: 'SN' },
  { label: 'RS', value: 'RS' },
  { label: 'SC', value: 'SC' },
  { label: 'SL', value: 'SL' },
  { label: 'SG', value: 'SG' },
  { label: 'SX', value: 'SX' },
  { label: 'SK', value: 'SK' },
  { label: 'SI', value: 'SI' },
  { label: 'SB', value: 'SB' },
  { label: 'SO', value: 'ZA' },
  { label: 'GS', value: 'GS' },
  { label: 'SS', value: 'SS' },
  { label: 'ES', value: 'ES' },
  { label: 'LK', value: 'LK' },
  { label: 'SD', value: 'SD' },
  { label: 'SR', value: 'SR' },
  { label: 'SJ', value: 'SJ' },
  { label: 'SE', value: 'SE' },
  { label: 'CH', value: 'CH' },
  { label: 'SY', value: 'SY' },
  { label: 'TW', value: 'TW' },
  { label: 'TJ', value: 'TJ' },
  { label: 'TZ', value: 'TZ' },
  { label: 'TH', value: 'TH' },
  { label: 'TL', value: 'TL' },
  { label: 'TG', value: 'TG' },
  { label: 'TK', value: 'TK' },
  { label: 'TO', value: 'TO' },
  { label: 'TT', value: 'TT' },
  { label: 'TN', value: 'TN' },
  { label: 'TR', value: 'TR' },
  { label: 'TM', value: 'TM' },
  { label: 'TC', value: 'TC' },
  { label: 'TV', value: 'TV' },
  { label: 'UG', value: 'UG' },
  { label: 'UA', value: 'UA' },
  { label: 'AE', value: 'AE' },
  { label: 'UM', value: 'UM' },
  { label: 'UY', value: 'UY' },
  { label: 'UZ', value: 'UZ' },
  { label: 'VU', value: 'VU' },
  { label: 'VE', value: 'VE' },
  { label: 'VN', value: 'VN' },
  { label: 'VG', value: 'VG' },
  { label: 'VI', value: 'VI' },
  { label: 'WF', value: 'WF' },
  { label: 'EH', value: 'EH' },
  { label: 'YE', value: 'YE' },
  { label: 'ZM', value: 'ZM' },
  { label: 'ZW', value: 'ZW' },
  { label: 'AX', value: 'AX' },

];

const Value = ({
  value,
  label,
  onRemove,
  classNames,
  ...others
}: MultiSelectValueProps & { value: string }) => {
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4]}`,
          paddingLeft: 10,
          borderRadius: 4,
        })}
      >
        <Box sx={{ lineHeight: 1, fontSize: 12 }}>
          <Flag code={value} style={{ width: "16px", height: "12px", marginInlineEnd: "10px" }} />{label}
        </Box>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          size={22}
          iconSize={14}
          tabIndex={-1}
        />
      </Box>
    </div>
  );
}

const Item = forwardRef<HTMLDivElement, SelectItemProps>(({ label, value, ...others }, ref) => {
  return (
    <div ref={ref} {...others}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <Flag code={value} style={{ width: "16px", height: "12px", marginInlineEnd: "10px" }} />{label}
        </div>
      </Box>
    </div>
  );
});

const modifyCountryBlack = (blackList: string[]) => {
    fetch("/modifyCountryBlackList", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blackList)
    })
        .then(function (response) {
            return response.json();
        })
}

const FlagTypesBlack = (props: Partial<MultiSelectProps>) => {
  const [countryBlackList, setcountryBlackList] = useState([]);
  return (
    <div className="main-Document-Countries" > {/* Upload Type search Box */}
      <div className='innerMain-Container'>

        <div className='labelContainer'>
          <h4 className='label'> Blacklist Countries  <FaFlag size={15} /></h4>
        </div>

      </div>

      <MultiSelect
        data={countriesData}
        limit={249}
        valueComponent={Value}
        itemComponent={Item}
        searchable
        defaultValue={['US', 'FI']}
        placeholder="Pick countries"
        styles={{
          label: { fontSize: "20px", paddingInline: "1%", marginTop: "1%" }
        }}
        onChange={setcountryBlackList}
        onDropdownClose={()=>modifyCountryBlack(countryBlackList)}

        {...props}
      />
    </div>
  );
}
export default FlagTypesBlack;