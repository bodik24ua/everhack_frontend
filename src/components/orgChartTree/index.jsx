import React
    from 'react'
import Tree
    from 'react-d3-tree'

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
    'id': 1,
    'parentId': null,
    'current': false,
    'blocked': true,
    'name': 'IT Industry',
    'children': [
        {
            'id': 23,
            'parentId': 2,
            'current': false,
            'blocked': true,
            'name': 'Ruby',
            'children': [
                {
                    'id': 24,
                    'parentId': 23,
                    'current': false,
                    'blocked': true,
                    'name': 'Ruby Principal',
                    'children': [
                        {
                            'id': 25,
                            'parentId': 24,
                            'current': false,
                            'blocked': true,
                            'name': 'Ruby Senior',
                            'children': [
                                {
                                    'id': 26,
                                    'parentId': 25,
                                    'current': false,
                                    'blocked': true,
                                    'name': 'Ruby Middle',
                                    'children': [
                                        {
                                            'id': 27,
                                            'parentId': 26,
                                            'current': false,
                                            'blocked': false,
                                            'name': 'Ruby Junior',
                                            'children': []
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
            'id': 2,
            'parentId': 1,
            'current': false,
            'blocked': true,
            'name': 'Developer',
            'children': [
                {
                    'id': 3,
                    'parentId': 2,
                    'current': false,
                    'blocked': true,
                    'name': 'Java',
                    'children': [
                        {
                            'id': 4,
                            'parentId': 3,
                            'current': false,
                            'blocked': true,
                            'name': 'Java Principal',
                            'children': [
                                {
                                    'id': 5,
                                    'parentId': 4,
                                    'current': false,
                                    'blocked': false,
                                    'name': 'Java Senior',
                                    'children': [
                                        {
                                            'id': 6,
                                            'parentId': 5,
                                            'current': true,
                                            'blocked': false,
                                            'name': 'Java Middle',
                                            'children': [
                                                {
                                                    'id': 7,
                                                    'parentId': 6,
                                                    'current': false,
                                                    'blocked': true,
                                                    'name': 'Java Junior',
                                                    'children': []
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
                    'id': 8,
                    'parentId': 2,
                    'current': false,
                    'blocked': true,
                    'name': 'Kotlin',
                    'children': [
                        {
                            'id': 9,
                            'parentId': 8,
                            'current': false,
                            'blocked': true,
                            'name': 'Kotlin Principal',
                            'children': [
                                {
                                    'id': 10,
                                    'parentId': 9,
                                    'current': false,
                                    'blocked': false,
                                    'name': 'Kotlin Senior',
                                    'children': [
                                        {
                                            'id': 11,
                                            'parentId': 10,
                                            'current': false,
                                            'blocked': false,
                                            'name': 'Kotlin Middle',
                                            'children': [
                                                {
                                                    'id': 12,
                                                    'parentId': 11,
                                                    'current': false,
                                                    'blocked': true,
                                                    'name': 'Kotlin Junior',
                                                    'children': []
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
                    'id': 13,
                    'parentId': 2,
                    'current': false,
                    'blocked': true,
                    'name': 'JavaScript',
                    'children': [
                        {
                            'id': 14,
                            'parentId': 13,
                            'current': false,
                            'blocked': true,
                            'name': 'JavaScript Principal',
                            'children': [
                                {
                                    'id': 15,
                                    'parentId': 14,
                                    'current': false,
                                    'blocked': true,
                                    'name': 'JavaScript Senior',
                                    'children': [
                                        {
                                            'id': 16,
                                            'parentId': 15,
                                            'current': false,
                                            'blocked': true,
                                            'name': 'JavaScript Middle',
                                            'children': [
                                                {
                                                    'id': 17,
                                                    'parentId': 16,
                                                    'current': false,
                                                    'blocked': false,
                                                    'name': 'JavaScript Junior',
                                                    'children': []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            'id': 18,
            'parentId': 1,
            'current': false,
            'blocked': true,
            'name': 'QA',
            'children': [
                {
                    'id': 19,
                    'parentId': 18,
                    'current': false,
                    'blocked': true,
                    'name': 'QA Principal',
                    'children': [
                        {
                            'id': 20,
                            'parentId': 19,
                            'current': false,
                            'blocked': true,
                            'name': 'QA Senior',
                            'children': [
                                {
                                    'id': 21,
                                    'parentId': 20,
                                    'current': false,
                                    'blocked': true,
                                    'name': 'QA Middle',
                                    'children': [
                                        {
                                            'id': 22,
                                            'parentId': 21,
                                            'current': false,
                                            'blocked': false,
                                            'name': 'QA Junior',
                                            'children': []
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

function getRoleRectColor(nodeDatum) {
    return nodeDatum.current ? '#2ECC71' : nodeDatum.blocked ? '#c2d4d4' : '#ffffff'
}

const renderRectSvgNode = ({
                               nodeDatum,
                               toggleNode
                           }) => (
    <g>
        {/* Rectangle node */}
        <rect
            width="140"
            height="50"
            x="-70"
            y="-25"
            fill={getRoleRectColor(nodeDatum)}
            stroke="#2471A3"
            strokeWidth="2"
            rx="10"  // Horizontal radius
            ry="10"  // Vertical radius
            onClick={() => onClickNode(nodeDatum)}
        />
        {/* Node text */}
        <text
            strokeWidth={1}
            fill="#000"
            x="0"
            y="0"
            textAnchor="middle"
            alignmentBaseline="central"
            style={{pointerEvents: 'none'}}>
            {nodeDatum.name}
        </text>
    </g>
)

const onClickNode = (nodeData, evt) => {
    window.location.href = `http://localhost:3000/career/${nodeData.name}`
}

const OrgChartTree = () => {

    return (
        <div
            id="treeWrapper"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                position: 'fixed',
                background: 'lightgrey',
            }}>
            <Tree
                translate={{
                    x: 900,
                    y: 70
                }}
                orientation="vertical"
                zoom={1}
                onClick={onClickNode}
                renderCustomNodeElement={renderRectSvgNode}
                data={orgChart}
            />
        </div>
    )
}

export default OrgChartTree
