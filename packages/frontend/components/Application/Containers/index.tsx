import { Button, List } from 'antd';
import styled from 'styled-components';
import Container from './Container';
import CreateContainer from './CreateContainer';
import useBoolean from '../../utils/useBoolean';
import { Application } from '../../../queries';

const Actions = styled.div`
    margin-bottom: 16px;
    display: flex;
    justify-content: flex-end;
`;

type Props = {
    application: Pick<Application, 'id' | 'containers'>;
};

export default function Containers({ application }: Props) {
    const [createVisible, { on, off }] = useBoolean(false);

    return (
        <div>
            <Actions>
                <Button type="primary" onClick={on}>
                    Create Container
                </Button>
            </Actions>
            <CreateContainer id={application.id} visible={createVisible} onClose={off} />
            <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={application.containers}
                renderItem={container => (
                    <List.Item>
                        <Container applicationID={application.id} container={container} />
                    </List.Item>
                )}
            />
        </div>
    );
}
