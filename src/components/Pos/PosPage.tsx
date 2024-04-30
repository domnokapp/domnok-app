import { Button, Text, Group, Alert, Image, Card, Badge, ScrollArea, Grid } from '@mantine/core';
import { IconBuildingStore } from '@tabler/icons-react';
import { Link } from '../Link';

const items = [
    { id: 1, name: 'Apple', price: '$ 12.55', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png' },
    { id: 2, name: 'Banana', price: '$ 12.55', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png' },
    { id: 3, name: 'Manger', price: '$ 12.55', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png' },

];

function ProductItem(items: any) {
    return (
        <>
        { items.map((item: any) => (
            <Grid.Col span={6} key={item.id}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src={item.image}
                            height={80}
                            alt="Norway"
                        />
                    </Card.Section>
            
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500} lineClamp={2}>{item.name}</Text>
                        <Badge color="pink">{item.price}</Badge>
                    </Group>
                </Card>
            </Grid.Col>
        )) }
        </>
    );
  }

export function PosPage() {
    return (
        <ScrollArea>
            <Grid>
                <ProductItem items={items} />
            </Grid>
        </ScrollArea>
    );
}