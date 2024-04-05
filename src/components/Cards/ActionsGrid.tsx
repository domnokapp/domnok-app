import {
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Anchor,
    Group,
    useMantineTheme,
    NavLink,
  } from '@mantine/core';
  import {
    IconCreditCard,
    IconBuildingBank,
    IconRepeat,
    IconReceiptRefund,
    IconReceipt,
    IconReceiptTax,
    IconReport,
    IconCashBanknote,
    IconCoin,
    IconScan,
    IconFileDollar,
    IconChartHistogram,
    IconStack,
    IconTags,
    IconExchange,
  } from '@tabler/icons-react';
  import classes from './ActionsGrid.module.css';

  const orderMenus = [
    { title: 'បង្កើតថ្មី', icon: IconScan, color: 'violet' },
    { title: 'បញ្ជីលក់', icon: IconFileDollar, color: 'indigo' },
    { title: 'របាយការណ៍', icon: IconChartHistogram, color: 'blue' },
  ];

  const catalogMenus = [
    { title: 'ផលិតផល', icon: IconStack, color: 'violet' },
    { title: 'ប្រភេទ', icon: IconTags, color: 'indigo' },
    { title: 'ខ្នាត (ឯកតា)', icon: IconExchange, color: 'blue' },
  ];
  
  export function ActionsGrid() {
    const theme = useMantineTheme();
  
    const orders = orderMenus.map((item) => (
      <UnstyledButton style={{
        '--radius': '0.5rem',
        borderRadius: 'var(--radius)',
        boxShadow: '0.5rem',
        border: 1,
        borderColor: 'gray',
      }} key={item.title} className={classes.item} py={10} onClick={ () => alert(`Hello, ${item.title}`) }>
        <item.icon color={theme.colors[item.color][6]} size="2rem" />
        <Text size="md" mt={7}>
          {item.title}
        </Text>
      </UnstyledButton>
    ));

    const catalogs = catalogMenus.map((item) => (
        <UnstyledButton style={{
          '--radius': '0.5rem',
          borderRadius: 'var(--radius)',
          boxShadow: '0.5rem',
          border: 1,
          borderColor: 'gray',
        }} key={item.title} className={classes.item} py={10} onClick={ () => alert(`Hello, ${item.title}`) }>
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
            <SimpleGrid cols={3} mt="md">
                {orders}
            </SimpleGrid>

            <Group justify="space-between" mt={15}>
                <Text size='lg' className={classes.title}>ផលិតផល</Text>
                <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
                    គ្រប់គ្រងការផលិតផល
                </Anchor>
            </Group>
            <SimpleGrid cols={3} mt="md">
                {catalogs}
            </SimpleGrid>

            <Group justify="space-between" mt={15}>
                <Text size='lg' className={classes.title}>ឃ្លាំង</Text>
                <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
                    គ្រប់គ្រងការស្តុក
                </Anchor>
            </Group>
        </Card>
        </>
    );
  }