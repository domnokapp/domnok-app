import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import { Link } from '../Link';

type BannerInformationProps = {
    id: number | undefined;
    code: string | undefined;
    name: string | undefined;
    teamName: string | undefined;
    photoUrl: string | undefined;
};

export function BannerInformationCard({code, name, photoUrl, teamName}: BannerInformationProps) {
  return (
    <UnstyledButton className={classes.user}>
        <Link to="/manage-product">
            <Group>
                <Avatar
                    src={ photoUrl != null ? photoUrl : "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" }
                    radius="xl"
                />
                <div style={{ flex: 1 }}>
                    <Text size="sm" fw={500}>
                        {teamName}
                    </Text>
                    <Text c="dimmed" size="xs">
                        #{name}[{code}]
                    </Text>
                </div>
                <IconChevronRight style={{width: rem(20), height: rem(20)}} stroke={1.5} />
            </Group>
        </Link>
    </UnstyledButton>
  );
}