import { Button, Paper, Text, Group, CloseButton } from '@mantine/core';

export function SetupTeam() {
    return (
        <Paper withBorder p="lg" radius="md" shadow="md" mb="sm">
            <Group justify="space-between" mb="xs">
                <Text fz="md" fw={500}>
                    បង្កើតហាងថ្មី
                </Text>
            </Group>
            <Text c="dimmed" fz="xs">
                ដើម្បីធ្វើការគ្រប់គ្រង ការលក់ ផលិតផល ឬ ឃ្លាំង បាន សូមមេតាចូលបង្កើតហាងជាមុនសិន។
            </Text>
            <Group justify="flex-end" mt="md">
                <Button variant="outline" size="xs">
                    រៀបចំ
                </Button>
            </Group>
        </Paper>
    );
  }