import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = () => {
    const originalDsaSheetLink =
        'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'
    const originalAuthorLinkedInLink = 'https://in.linkedin.com/in/rajarvp'
    const gitHubLink = ''

    return (
        <Flex
            className={'footer'}
            bg={'yellow'}
            w={'100vw'}
            px={4}
            py={1}
            flexGrow={'0'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            userSelect={'none'}
        >
            <Text
                fontWeight={'md'}
                fontSize={'xs'}
                fontFamily={'customFamily'}
                fontStyle={'normal'}
                color={''}
                textAlign={'center'}
            >
                A Personal web-based progress tracker based on{' '}
                {
                    <a
                        href={originalDsaSheetLink}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <b>A2Z DSA Sheet</b>
                    </a>
                }{' '}
                by{' '}
                {
                    <a
                        href={originalAuthorLinkedInLink}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <b>Striver</b>
                    </a>
                }
                .
            </Text>
        </Flex>
    )
}

export default Footer
