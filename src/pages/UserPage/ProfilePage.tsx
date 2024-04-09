import '@xelene/tgui/dist/styles.css';
import '@mantine/core/styles/Input.css';
import type { FC } from 'react';
import { Typography } from 'antd';
import { useState } from 'react';
import { TextInput, Tooltip, Center, Text, rem, useMantineTheme } from '@mantine/core';
import { Page } from '../../components/Page';
import { IconClearAll, IconInfoCircle } from '@tabler/icons-react';
import { Input, List, Tappable } from '@xelene/tgui';

export const ProfilePage: FC = () => {
  const theme = useMantineTheme();
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
    >
      <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </Center>
      </Text>
    </Tooltip>
  );

  return (
    <>
      <Page title='Profile Page'>
        <Typography.Title level={3}>Profile Page</Typography.Title>

        <List style={{
      background: 'var(--tgui--secondary_bg_color)',
      width: 500
    }}>

    
        <Input 
          header='គោត្តនាមនិងនាម'
          placeholder='បញ្ចូលឈ្មោះពេញរបស់អ្នក'
          style={{padding: 0, margin: 0}}
          value={name}
          onChange={e => setName(e.target.value)}
          after={<Tappable Component="div" style={{display: 'flex'}} onClick={() => setName('')}>
            <IconClearAll />
          </Tappable>} />

        <TextInput
          rightSection={rightSection}
          color={theme.colors['cyan'][6]}
          label="គោត្តនាមនិងនាម"
          placeholder="បញ្ចូលឈ្មោះពេញរបស់អ្នក"
          value={name}
          onChange={(event) => setCategoryId(event.currentTarget.value)}
          mt="md"
        />
        </List>
        
      </Page>
    </>
  );
};