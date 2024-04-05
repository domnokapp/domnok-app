import { Button, Paper, Text, Group, CloseButton } from '@mantine/core';

export function SetupTeam() {
    return (
        <Paper withBorder p="lg" radius="md" shadow="md" mr="sm" mt="sm" ml="sm" mb={0} variant="outline">
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
        </Paper>
    );
  }