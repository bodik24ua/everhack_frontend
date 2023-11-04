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
                    // 'children': []
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

const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g>
        {/* Rectangle node */}
        <rect
            width="140"
            height="50"
            x="-70"
            y="-25"
            fill="#D6EAF8"
            stroke="#2471A3"
            strokeWidth="2"
            // onClick={toggleNode}
        />
        {/* Node text */}
        <text
            fill="#000"
            x="0"
            y="0"
            textAnchor="middle"
            alignmentBaseline="central"
            style={{ pointerEvents: 'none' }}>
            {nodeDatum.name}
        </text>
    </g>
);

const OrgChartTree = () => {
    const onClickNode = (nodeData, evt) => {
        console.log('Clicked node', nodeData);
        // You can perform other actions here based on the clicked node
        
    };
    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div
            id="treeWrapper"
            style={{
                display: 'flex',
                justifyContent: 'center', // Center horizontally
                alignItems: 'center',     // Center vertically
                width: '1200px',
                height: '1000px',
            }}>
            <Tree
                translate={{ x:800, y: 70 }}
                orientation="vertical"
                zoom={1}
                onNodeClick={onClickNode}
                renderCustomNodeElement={renderRectSvgNode}
                data={orgChart}/>
        </div>
    )
}

export default OrgChartTree
