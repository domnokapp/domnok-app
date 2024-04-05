import { Button, Paper, Text, Group, Alert } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

export function SetupTeam() {
    return (
        <Alert p="lg" radius="md" m="sm" variant="outline" icon={<IconSettings />} color='orange'>
            <Group justify="space-between" mb="xs">
                <Text fw={500} size="lg">
                    បង្កើតហាងថ្មី
                </Text>
            </Group>
            <Text c="dimmed" fz="sm">
                ដើម្បីធ្វើការគ្រប់គ្រង ការលក់ ផលិតផល ឬ ឃ្លាំង បាន សូមមេតាចូលបង្កើតហាងជាមុនសិន។
            </Text>
            <Group justify="flex-end" mt="md">
                <Button variant="filled" size="sm">
                    រៀបចំ
                </Button>
            </Group>
        </Alert>
    );
  }