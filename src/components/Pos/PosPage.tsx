import { Text, Group, Image, Card, Badge, ScrollArea, Grid } from '@mantine/core';

const items = [
    { id: 1, barcode: "add", name: 'មេជីធម្មជាតិ OF អរម៉ូន', price: '$ 12.55', image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24014310/2023/7/14/e0d643e5-05bc-4249-833b-0ddf80440f851689274793057BULLMERMenBeigePrintedV-NeckPocketsT-shirt1.jpg' },
    { id: 2, barcode: "ss", name: 'EM ទឹកអង្ករ', price: '$ 12.55', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/j/r/p/xl-lmts003512-lee-original-imagrjgyx5sv654f.jpeg?q=90&crop=false' },
    { id: 3, barcode: "aa", name: 'ប្រេងលាបសក់', price: '$ 12.55', image: 'https://m.media-amazon.com/images/I/51ulmT3YUZL._AC_UY1000_.jpg' },
    { id: 4, barcode: "www", name: 'មេជីគោក OF ថនិកសត្វ', price: '$ 12.55', image: 'https://pbx2-pbww-prod-pbww-cdn.getprintbox.com/media/productimage/fe050866-8169-4645-ad76-10437425291c/Blank%20T-Shirt_thumb_300x300?mt=1588770269.372995' },
    { id: 5, barcode: "aaaaa", name: 'មេជីគោក OF ថនិកសត្វ', price: '$ 12.55', image: 'https://pbx2-pbww-prod-pbww-cdn.getprintbox.com/media/productimage/fe050866-8169-4645-ad76-10437425291c/Blank%20T-Shirt_thumb_300x300?mt=1588770269.372995' },
    { id: 6, barcode: "aaaaa", name: 'មេជីគោក OF ថនិកសត្វ', price: '$ 12.55', image: 'https://pbx2-pbww-prod-pbww-cdn.getprintbox.com/media/productimage/fe050866-8169-4645-ad76-10437425291c/Blank%20T-Shirt_thumb_300x300?mt=1588770269.372995' }
];

function ProductItem(products: any) {
    return (
        <>
        { items.map((item) => (
            <Grid.Col span={4} key={item.id}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section style={{
                        padding: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image
                            src={item.image}
                            height={120}
                            w="auto"
                            alt={item.name}
                            fit="contain"
                        />
                    </Card.Section>
            
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500} lineClamp={2}>{item.name}</Text>
                        <Text fw={500} lineClamp={1}>{item.barcode}</Text>
                        <Badge color="pink">{item.price}</Badge>
                    </Group>
                </Card>
            </Grid.Col>
        )) }
        </>
    );
}

export function PosPage({products}: any) {

    return (
        <ScrollArea>
            <Grid>
                <ProductItem products={products} />
            </Grid>
        </ScrollArea>
    );
}