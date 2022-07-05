import { uuid } from 'uuidv4';
export const proposals = [
    {
        id: uuid(),
        title: 'Mango Markets Grant',
        status: 'completed',
        statusTime: '5 days ago',
        description: `Send 500'000 SRM grant to Mango Markets to be used for trading invective program and to be managed by the MangoLiquidityDAO As per this post https://forum.projectserum.com/t/mango-markets-serum-grant-proposal/540`,
        approve: '2.3m',
        deny: '0',
        instructions: [
            {
                tokenType: 'transfer',
                amount: '500,000 SRM',
                items: [
                    {
                        title: 'Program',
                        token: uuid(),
                        type: 'Token Program',
                        category: null,
                    },
                    {
                        title: 'Account1',
                        token: uuid(),
                        type: 'Token Program'
                    },
                ],
            },
        ]
    },
]