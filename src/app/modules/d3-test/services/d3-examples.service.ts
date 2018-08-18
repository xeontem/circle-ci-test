import { Injectable } from '@angular/core';
import { BaseType, RGBColor, PieArcDatum } from 'd3';
import * as d3 from 'd3';

export interface Test {
  title: String;
  descr: String;
}

@Injectable()
export class D3ExamplesService {

  constructor() { }

  get tests(): Test[] {
    const tests: Test[] = [];
    let index = 0;
    for (const method in D3ExamplesService.prototype) {
      if (method.includes('test') && method !== 'tests') {
        tests.push({
          title: 'Test ' + index++,
          descr: 'Description for test'
        });
      }
    }
    return tests;
  }

  test0 (wrapper: BaseType): void {
    const svg = d3.select(wrapper)
      .select('svg')
      .attr('width', '100%')
      .attr('height', '100%');

    const circle = svg.append('circle')
      .attr('cx', 50)
      .attr('cy', 50)
      .attr('r', 50)
      .attr('fill', 'red');

    const rect = svg.append('rect')
      .attr('x', 150)
      .attr('y', 50)
      .attr('width', 80)
      .attr('height', 80)
      .attr('fill', 'blue');

    const line = svg.append('line')
      .attr('x1', 55)
      .attr('y1', 55)
      .attr('x2', 150)
      .attr('y2', 150)
      .attr('stroke', 'green')
      .attr('stroke-width', 5);
  }

  test1(wrapper: BaseType) {
    const scale = d3.scaleLinear()
      .domain([0, 56])
      .range([0, 500]);

    const axis = d3.axisBottom(scale).ticks(5);


    const svg = d3.select(wrapper)
      .select('svg')
        .attr('width', '100%')
        .attr('height', '100%');

    const g = svg.append('g')
      .attr('transform', 'translate(50, 30)');

    svg.append('g')
      .attr('transform', 'translate(50, 160)')
      .call(axis);

    const data = [10, 25, 56];

    const color = d3.scaleLinear<string>()
      .domain([0, 56])
      // .range([d3.rgb("#F00"), d3.rgb('#00F')])
      .range(['red', 'blue']);

    const bars = g.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', scale)
      .attr('height', 30)
      .attr('fill', color)
      .attr('y', (d, i) => i * 40);
  }

  test2(wrapper: BaseType) {
    const data = [10, 50, 80];
    const svg = d3.select(wrapper)
      .select('svg')
      .attr('width', '100%')
      .attr('height', '100%');
    const group = svg.append('g')
      .attr('transform', 'translate(150, 100)');
    const arc = d3.arc<PieArcDatum<number>>()
      .innerRadius(60)
      .outerRadius(90);
    const pie = d3.pie()
      .value(d => d.valueOf());
    const arcs = group.selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', d => {
        switch (d.data) {
          case 80: return 'orange';
          case 50: return 'brown';
          default: return 'violet';
        }});

    const group2 = svg.append('g')
      .attr('transform', 'translate(300, 60)');

    [{y: 0, color: 'violet', text: 'Java'}, {y: 25, color: 'orange', text: 'JS'}, {y: 50, color: 'brown', text: 'Haskell'}]
      .forEach(item => {
        const colorGroup = group2.append('g');
        colorGroup.append('rect')
          .attr('x', 0)
          .attr('y', item.y)
          .attr('width', 20)
          .attr('height', 20)
          .attr('fill', item.color);
        colorGroup.append('text')
          .attr('x', 30)
          .attr('y', item.y + 15)
          .html(item.text);
      });

  }

}
