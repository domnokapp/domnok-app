import { Button, Text, Group, Alert } from '@mantine/core';
import { IconBuildingStore } from '@tabler/icons-react';
import { Link } from '../Link';

export function SetupTeam() {
    return (
        <Alert p="lg" radius="md" icon={<IconBuildingStore />} color='orange' mb="md">
            <Group justify="space-between" mb="xs">
                <Text fw={500} size="lg">
                    បង្កើតហាងថ្មី
                </Text>
            </Group>
            <Text c="dimmed" fz="sm">
                ដើម្បីធ្វើការគ្រប់គ្រង ការលក់ ផលិតផល ឬ ឃ្លាំង បាន សូមមេតាចូលបង្កើតហាងជាមុនសិន។
            </Text>
            <Group justify="flex-end" mt="md">
                <Link to="/team-page">
                    <Button variant="filled" size="sm">
                        ចាប់ផ្តើម
                    </Button>
                </Link>
            </Group>
        </Alert>
    );
  }