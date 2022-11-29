import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

// import { colors, useICColorMode } from 'styles/colors'

const DataRow = ({
  title,
  value,
  textColor,
}: {
  title: string
  value: string
  textColor: string
}) => {
  return (
    <Flex direction='column'>
      <Text color={textColor} fontSize='12px' fontWeight='500'>
        {title}
      </Text>
      <Text color={textColor} fontSize='16px' fontWeight='500'>
        {value}
      </Text>
    </Flex>
  )
}

const Dot = ({ color }: { color: string }) => {
  return <Box backgroundColor={color} borderRadius='8px' w='16px' h='16px' />
}

const PieChartTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const tooltipBgColor = "#FFF"
    const textColor = "#000"

    const { backgroundColor, title, percent, valueDisplay } = payload[0].payload
    return (
      <Flex
        background={tooltipBgColor}
        borderRadius='8px'
        direction='column'
        minW='160px'
        p='16px'
      >
        <Flex align='center' justify='space-between'>
          <Text color={textColor} fontSize='16px' fontWeight='700'>
            {title}
          </Text>
          <Dot color={backgroundColor} />
        </Flex>
        <Box my='8px'>
          <DataRow title='Allocation' value={percent} textColor={textColor} />
        </Box>
        {valueDisplay && (
          <DataRow
            title='Quantity Per Token'
            value={valueDisplay ?? ''}
            textColor={textColor}
          />
        )}
      </Flex>
    )
  }

  return null
}

export default PieChartTooltip
