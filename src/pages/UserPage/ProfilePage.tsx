import type { FC } from 'react';
import { Typography } from 'antd';
import classes from './UserPage.module.css';
import { useState } from 'react';
import { TextInput } from '@mantine/core';
import { Page } from '../../components/Page';

export const ProfilePage: FC = () => {
  const [focused, setFocused] = useState(false);
  const [name, setName] = useState('');
  const floating = name.trim().length !== 0 || focused || undefined;

  return (
    <>
      <Page title='Profile Page'>
        <Typography.Title level={3}>Profile Page</Typography.Title>
        <TextInput
          label="គោត្តនាមនិងនាម"
          placeholder="បញ្ចូលឈ្មោះពេញរបស់អ្នក"
          required
          classNames={classes}
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          mt="md"
          autoComplete="nope"
          data-floating={floating}
          labelProps={{ 'data-floating': floating }}
        />
      </Page>
    </>
  );
};