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
  } from '@tabler/icons-react';
  import classes from './ActionsGrid.module.css';

  const mockdata = [
    { title: 'បង្កើតថ្មី', icon: IconScan, color: 'violet' },
    { title: 'បញ្ជីលក់', icon: IconFileDollar, color: 'indigo' },
    { title: 'របាយការណ៍', icon: IconChartHistogram, color: 'blue' },
  ];
  
  export function ActionsGrid() {
    const theme = useMantineTheme();
  
    const items = mockdata.map((item) => (
      <UnstyledButton key={item.title} className={classes.item} py={5}>
        <item.icon color={theme.colors[item.color][6]} size="2rem" />
        <Text size="md" mt={7}>
          {item.title}
        </Text>
      </UnstyledButton>
    ));
  
    return (
      <Card withBorder radius="lg" className={classes.card}>
        <Group justify="space-between">
            <Text size='lg' className={classes.title}>ការលក់</Text>
            <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
                គ្រប់គ្រងការលក់
            </Anchor>
        </Group>
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
    );
  }