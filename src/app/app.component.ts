import { Component } from '@angular/core';
import { GlobalModel } from './models/global.model';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Live COVID-19 Statitics";

  //region declaraion
  global: boolean;
  country: string;
  data: GlobalModel;
  dailyData: any[];
  countries: any[];
  //end region

  //chart declaration
  lineChartType = "line";
  lineChartLabels: any[] = ["Infected", "Recovered", "Deaths"]
  lineChartData: any[] = [
    {
      label: "Temp Label",
      data: [65, 64, 33, 44]
    }
  ];
  barChartType = "bar";
  barChartLabels: any[] = ["Infected", "Recovered", "Deaths"]
  barChartData: any[] = [
    {
      label: "Label",
      data: [65, 76, 33],
    }
  ];
  //end chart

  constructor(private api: ApiService) {
    this.data = new GlobalModel();
  }

  ngOnInit(): void {
    this.global = true;
    this.fetchData();
    this.fetchCountries();
    this.fetchDailyData();
  }

  fetchData() {
    this.api.fetchData().subscribe((res: any[]) => {
      this.data.confirmed = res["confirmed"]["value"];
      this.data.recovered = res["recovered"]["value"];
      this.data.deaths = res["deaths"]["value"];
      this.data.lastupdate = res["lastUpdate"];
    });
  }

  fetchCountries() {
    this.api.fetchCountries().subscribe((res: any[]) => {
      var countries = res["countries"];
      this.countries = countries.map((name) => name["name"]);
    });
  }

  fetchDataByCountry(country: string) {
    this.api.fetchDataByCountry(country).subscribe((res: any[]) => {
      this.data.confirmed = res["confirmed"]["value"];
      this.data.recovered = res["recovered"]["value"];
      this.data.deaths = res["deaths"]["value"];
      this.data.lastupdate = res["lastUpdate"];

      this.barChartData = [
        {
          data: [this.data.confirmed, this.data.recovered, this.data.deaths],
          label: "People"
        }
      ];
    });
  }

  fetchDailyData() {
    this.api.fetchDailyData().subscribe((res: any[]) => {
      this.lineChartLabels = res.map((data) => data["reportDate"]);
      var infectedData = res.map((confirmed) => confirmed["totalConfirmed"]);
      // var recovered = res.map((rev) => rev);
      var deaths = res.map((deaths) => deaths["deaths"]["total"]);

      this.lineChartData = [
        {
          data: infectedData,
          label: "Infected"
        },
        {
          data: deaths,
          label: "Deaths"
        }
      ];
    });
  }

  countryChanged(value: string) {
    this.country = value;
    if (value == "global") {
      this.fetchData();
      this.global = true;
    } else {
      this.fetchDataByCountry(value);
      this.global = false;
    }
  }

  toStatitics() {
    document.getElementById("statistics").scrollIntoView({ behavior: "smooth" });
  }

  toAbout() {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  }

  // toHeader() {
  //   document.getElementById("header").scrollIntoView({ behavior: "smooth" });
  // }

}
