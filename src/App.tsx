import { useState } from 'react';
import { data, IItem } from './data';
import { ThemeProvider, useTheme, Theme } from './Context'; // Убедись, что импорт есть!
import './styles.css';

export function App() {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light');

    function changeTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    const className = `app app_${currentTheme}`;
    return (
        <div className={className}>
            <button onClick={changeTheme}>Toggle theme</button>
            {/* Вот здесь ОЧЕНЬ ВАЖНО обернуть List в ThemeProvider */}
            <ThemeProvider theme={currentTheme}>
                <List data={data} />
            </ThemeProvider>
        </div>
    );
}

// Убираем theme из пропсов
function List(props: { data: IItem[] }) {
    return (
        <div>
            {props.data.map((item) => (
                <ListItem caption={item.name} key={item.id} />
            ))}
        </div>
    );
}

// Убираем theme из пропсов, используем хук
function ListItem(props: { caption: string }) {
    const theme = useTheme(); // Вот здесь мы берем тему
    const className = `listItem listItem_${theme}`;

    return <div className={className}>{props.caption}</div>;
}
