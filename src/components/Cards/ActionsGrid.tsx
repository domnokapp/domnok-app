import {
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Anchor,
    Group,
    useMantineTheme,
  } from '@mantine/core';
  import {
    IconScan,
    IconFileDollar,
    IconChartHistogram,
    IconStack,
    IconTags,
    IconExchange,
  } from '@tabler/icons-react';
  import classes from './ActionsGrid.module.css';
import { Link } from '../Link';

  const orderMenus = [
    { title: 'បង្កើតថ្មី', icon: IconScan, color: 'violet', path: "/manage-product" },
    { title: 'បញ្ជីលក់', icon: IconFileDollar, color: 'indigo', path: "/manage-product" },
    { title: 'របាយការណ៍', icon: IconChartHistogram, color: 'blue', path: "/manage-product" },
  ];

  const catalogMenus = [
    { title: 'ផលិតផល', icon: IconStack, color: 'violet', path: "/manage-product" },
    { title: 'ប្រភេទ', icon: IconTags, color: 'indigo', path: "/manage-product" },
    { title: 'ខ្នាត (ឯកតា)', icon: IconExchange, color: 'blue', path: "/manage-product" },
  ];
  
  export function ActionsGrid() {
    const theme = useMantineTheme();
  
    const orders = orderMenus.map((item) => (
        <UnstyledButton key={item.title} className={classes.item} py={10}>
            <Link to={item.path}>
                <item.icon color={theme.colors[item.color][6]} size="2rem" />
                <Text size="md" mt={7}>
                {item.title}
                </Text>
            </Link>
        </UnstyledButton>
    ));

    const catalogs = catalogMenus.map((item) => (
        <UnstyledButton key={item.title} className={classes.item} py={10} onClick={ () => alert(`Hello, ${item.title}`) }>
          <item.icon color={theme.colors[item.color][6]} size="2rem" />
          <Text size="md" mt={7}>
            {item.title}
          </Text>
        </UnstyledButton>
      ));
  
    return (
        <>
        <Card className={classes.card}>
            <Group justify="space-between">
                <Text size='lg' className={classes.title}>ការលក់</Text>
                <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
                    គ្រប់គ្រងការលក់
                </Anchor>
            </Group>
            <SimpleGrid cols={3} mt={7}>
                {orders}
            </SimpleGrid>

            <Group justify="space-between" mt="lg">
                <Text size='lg' className={classes.title}>ផលិតផល</Text>
                <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
                    គ្រប់គ្រងការផលិតផល
                </Anchor>
            </Group>
            <SimpleGrid cols={3} mt={7}>
                {catalogs}
            </SimpleGrid>

            <Group justify="space-between" mt="lg">
                <Text size='lg' className={classes.title}>ឃ្លាំង</Text>
                <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
                    គ្រប់គ្រងការស្តុក
                </Anchor>
            </Group>
        </Card>
        </>
    );
  }