import React, { Component } from "react";

class Clicker extends Component {
    state = {
        count: 0,
        interval: 1000,
        isAutoClicking: false,
        timer: null,
    };

    componentWillUnmount () {
        this.clearAutoClick();
    }

    clearAutoClick = () => {
        if (this.state.timer) {
            clearInterval(this.state.timer);
            this.setState({ timer: null });
        }
    };
    
    clearClick = () => {
        if (!this.state.timer) {
            this.setState({ count: 0 })
        }
    }


    startAutoClick = () => {
        this.clearAutoClick();
        const newTimer = setInterval(() => {
            this.setState((prevState) => ({ count: prevState.count + 1 }))
        }, this.state.interval);

        this.setState({isAutoClicking: true, timer: newTimer});
    }

    stopAutoClick = () => {
        this.clearAutoClick();
        this.setState({isAutoClicking: false});
    }

    setIntervalTime = (newInterval) => {
        this.setState({ interval: newInterval }, () => {
            if (this.state.isAutoClicking) {
            this.startAutoClick(); 
            }
        });
    };
    
    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() { 
        const { count, isAutoClicking, interval } = this.state;
        
        return (
            <div>
                <h2 className="title-h1">Автоклікер</h2>
                <p>Кількість кліків: {count}</p>
                <button onClick={this.handleClick}>Клікай</button>
                <div>
                    <p>Поточний інтервал: {interval / 1000}</p>
                    <button onClick={() => this.setIntervalTime(1000)}>1 second</button>
                    <button onClick={() => this.setIntervalTime(2000)}>2 second</button>
                    <button onClick={() => this.setIntervalTime(5000)}>5 second</button>
                    <button onClick={() => this.setIntervalTime(10000)}>10 second</button>
                    
                    <p>При оновлені інтервалу вимикайте автоклікер та запускайте повторно для оновлення даних</p>
                    <button onClick={this.startAutoClick} disabled={isAutoClicking}>Увімкнути автоклік</button>
                    <button onClick={this.stopAutoClick} disabled={!isAutoClicking}>Вимкнути автоклік</button>
                    <button onClick={this.clearClick}>Очистити інтервал</button>
                </div>
            </div>
        );
    }
}

export default Clicker;