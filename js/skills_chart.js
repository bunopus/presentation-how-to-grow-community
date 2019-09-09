class SkillsChart {
    constructor(container) {
        this.container = container;
        this.labels = ['', '', '', '', '', ''];
        container.innerHtml = "";
        this.skills_chart = Chartist.Line(container, {
            labels: this.labels,
        }, {
            low: 0,
            high: 10,
            showArea: true,
            chartPadding: 20,
            showPoint: true,
            fullWidth: true,
            axisY: {
                onlyInteger: true
            },
        });
    }

    update(data) {
        Object.assign(data, {labels: this.labels});
        this.skills_chart.update(data);
    }
}


