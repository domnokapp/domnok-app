import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import { Link } from '../Link';
import { UserModel } from '../Type/type';

export function BannerInformationCard({code, photoUrl, teamName}: UserModel) {
  return (
    <UnstyledButton className={classes.user}>
        <Link to="/manage-product">
            <Group>
                <Avatar
                    src={ photoUrl }
                    radius="xl"
                    defaultValue="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                />
                <div style={{ flex: 1 }}>
                    <Text size="md" fw={500} lineClamp={1}>
                        {teamName}
                    </Text>
                    <Text c="dimmed" size="xs">
                        @{code}
                    </Text>
                </div>
                <IconChevronRight style={{width: rem(20), height: rem(20)}} stroke={1.5} />
            </Group>
        </Link>
    </UnstyledButton>
  );
}