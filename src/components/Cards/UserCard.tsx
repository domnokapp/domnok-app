import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import { Link } from '../Link';

type UserProps = {
    firstName: string | undefined;
    lastName: string | undefined;
    photoUrl: string | undefined;
    username: string | undefined;
};

export function UserCard({firstName, lastName, photoUrl, username}: UserProps) {
  return (
    <UnstyledButton className={classes.user}>
        <Link to="/manage-product">
            <Group>
                <Avatar
                    src={ photoUrl ? photoUrl : "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" }
                    radius="xl"
                />

                <div style={{ flex: 1 }}>
                    <Text size="sm" fw={500}>
                        {firstName} {lastName}
                    </Text>

                    <Text c="dimmed" size="xs">
                        @{username}
                    </Text>
                </div>

                <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
            </Group>
        </Link>
    </UnstyledButton>
  );
}