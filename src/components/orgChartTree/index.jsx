import React
    from 'react'
import Tree
    from 'react-d3-tree'

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
    name: 'IT Industry',
    'current': false,
    'blocked': true,
    'children': [
        {
            'name': 'Developer',
            'current': false,
            'blocked': false,
            'children': [
                {
                    'name': 'Java',
                    'current': false,
                    'blocked': false,
                    'children': [
                        {
                            'name': 'Java Principal',
                            'current': false,
                            'blocked': false,
                            'children': [
                                {
                                    'name': 'Java Senior',
                                    'current': false,
                                    'blocked': false,
                                    'children': [
                                        {
                                            'name': 'Java Middle',
                                            'current': true,
                                            'blocked': false,
                                            'children': [
                                                {
                                                    'name': 'Java Junior',
                                                    'current': false,
                                                    'blocked': true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    'name': 'Python',
                    'current': false,
                    'blocked': false,
                    'children': [
                        {
                            'name': 'Python Principal',
                            'current': false,
                            'blocked': false,
                            'children': [
                                {
                                    'name': 'Python Senior',
                                    'current': false,
                                    'blocked': false,
                                    'children': [
                                        {
                                            'name': 'Python Middle',
                                            'current': false,
                                            'blocked': false,
                                            'children': [
                                                {
                                                    'name': 'Python Junior',
                                                    'current': false,
                                                    'blocked': false
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    'name': 'JavaScript',
                    'current': false,
                    'blocked': false,
                    'children': []
                }
            ]
        },
        {
            'name': 'QA',
            'current': false,
            'blocked': false,
            'children': [
                {
                    'name': 'QA Principal',
                    'current': false,
                    'blocked': false,
                    'children': [
                        {
                            'name': 'QA Senior',
                            'current': true,
                            'blocked': false,
                            'children': [
                                {
                                    'name': 'QA Middle',
                                    'current': false,
                                    'blocked': false,
                                    'children': [
                                        {
                                            'name': 'QA Junior',
                                            'current': false,
                                            'blocked': false
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

const OrgChartTree = () => {
    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div
            id="treeWrapper"
            style={{
                display: 'flex',
                justifyContent: 'center', // Center horizontally
                alignItems: 'center',     // Center vertically
                width: '1000px',
                height: '800px',
                overflow: 'hidden'
            }}>
            <Tree
                translate={{ x: 0, y: 0 }}
                orientation="vertical"
                zoom={1}
                data={orgChart}/>
        </div>
    )
}

export default OrgChartTree
