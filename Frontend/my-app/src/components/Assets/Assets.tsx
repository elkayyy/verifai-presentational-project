import { TextInput } from '@mantine/core';
import './Assets.css'


export default function Assets() {

  return (

    <div className='assets'> {/* Assets */}
           
        <div className='asset-box'>
            <div className='asset-box-headline'>
                <h4>Assets</h4>
            </div>

            <div className='asset-box-entries'>
                <div className='default-assets'>
                <TextInput
                placeholder="CDN"
                label="Default Assets"
                radius="xl"
                size="md"
                styles={{
                    input: { fontFamily: 'generic-family' , color : 'gray' }
                  }}
                required
                />
                </div>

                <div className='custom-assets'>
                <TextInput
                placeholder="sdk/custom"
                label="Custom Assets"
                radius="xl"
                size="md"
                styles={{
                    input: { fontFamily: 'generic-family' , color : 'gray' }
                  }}
                required
                />

                </div>
           
                    
            </div>


        </div>

     

    </div>


  )
}
