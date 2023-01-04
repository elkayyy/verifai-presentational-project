import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Table } from '@mantine/core';
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';

export function TableEntryModal({ tableEntryData }) {

    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();

      const rows = (
        <tr key={tableEntryData.model}>
          <td>{tableEntryData.model}</td>
          <td>{tableEntryData.country}</td>
          <td>{tableEntryData.type}</td>
          <td>{tableEntryData.uuid}</td>
          <td>{tableEntryData.width_mm} X {tableEntryData.height_mm}</td>
        </tr>
      );
    
    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Verifai Result"
                size= "calc(100vw - 1000px)"
                overlayColor={
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[9]
                      : theme.colors.gray[9]
                  }
                  styles={{ modal: { backgroundColor: "#f8faff" } }}
                  overlayOpacity={0.5}
                  overlayBlur={3}
            >
                <Tabs color="teal">
                <Tabs.Tab label="Model" icon={<Photo size={14} />}>
                <div className='model-container'>
                
                <Table highlightOnHover>
                <thead>
                    <tr>
                    <th>Model</th>
                    <th>Country</th>
                    <th>Document Type</th>
                    <th>Uuid</th>
                    <th>Dimensions</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
                </Table>

                </div>
                </Tabs.Tab>
                
                <Tabs.Tab label="MRZ" > Data not available</Tabs.Tab>
                <Tabs.Tab label="VIZ" > Data not available </Tabs.Tab>
                <Tabs.Tab label="Barcodes">Data not available</Tabs.Tab>
                <Tabs.Tab label="Face Matching" >Data not available</Tabs.Tab>
               
                </Tabs>
                {/* Modal content */}
            </Modal>

            <Group position="center">
                <Button onClick={() => 
                    {
                        setOpened(true);
                    }}>Show</Button>
            </Group>
        </>
    );
}