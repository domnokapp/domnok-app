import '@xelene/tgui/dist/styles.css';
import '@mantine/core/styles/Input.css';
import type { FC } from 'react';
import { Typography } from 'antd';
import classes from './UserPage.module.css';
import { useState } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text, rem } from '@mantine/core';
import { Page } from '../../components/Page';
import { IconInfoCircle } from '@tabler/icons-react';

export const ProfilePage: FC = () => {
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

        <TextInput
          rightSection={rightSection}
          label="គោត្តនាមនិងនាម"
          placeholder="បញ្ចូលឈ្មោះពេញរបស់អ្នក"
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          mt="md"
        />

        <TextInput
          rightSection={rightSection}
          label="គោត្តនាមនិងនាម"
          placeholder="បញ្ចូលឈ្មោះពេញរបស់អ្នក"
          value={categoryId}
          onChange={(event) => setCategoryId(event.currentTarget.value)}
          mt="md"
        />
        
      </Page>
    </>
  );
};