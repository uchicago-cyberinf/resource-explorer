// Questions

const resources = [
      {
         "title": "IT Services Cyberinfrastructure",
         "id": "itservices",
         "url": "https://its.uchicago.edu/",
         "attributes": {
           "q-kind": ["kind-network", "kind-service", "kind-storage", "kind-cloud"],
           "q-service": ["service-endtoend"],
           "q-framework": [],
         }
      },
      {
         "title": "Research Computing Center (RCC)",
         "id": "rcc",
         "url": "https://rcc.uchicago.edu/",
         "attributes": {
           "q-kind": ["kind-service", "kind-hpc", "kind-compute"],
           "q-size": [],
           "q-service": ["service-software", "service-hpc"],
           "q-framework": [],
           "q-backups": [],
           "q-snapshots": []
         },
         "title": "Secure Data Enclave (SDE)",
         "id": "sde",
         "url": "https://securedata.uchicago.edu/",
         "attributes": {
           "q-kind": ["kind-service", "kind-storage", "kind-compute"],
           "q-size": [],
           "q-service": ["service-software"],
           "q-framework": [],
           "q-sensitive": ["sensitive-true"],
           "q-snapshots": []
         },
      } // Add a comma before you add more...
/*      {
         "title": "Sherlock",
         "id": "sherlock",
         "url": "https://www.sherlock.stanford.edu/docs/overview/introduction/",
         "attributes": {
           "q-kind": ["kind-compute", "kind-hpc"],
           "q-service": [],
           "q-framework": ["framework-slurm", "framework-containers"],
           "q-backups": ["backups-true"]
         }
      },
      {
         "title": "SCG-4",
         "id": "scg-4",
         "url": "https://login.scg.stanford.edu/",
         "attributes": {
           "q-kind": ["kind-compute", "kind-hpc"],
           "q-service": [],
           "q-framework": ["framework-slurm", "framework-containers"],
           "q-domain": ["domain-bioinformatics"],
           "q-backups": ["backups-true"]
         }
      },
      {
         "title": "Oak",
         "id": "oak",
         "url": "https://stanford-rc.github.io/docs-oak/",
         "attributes": {
           "q-kind": ["kind-storage"],
           "q-service": [],
           "q-framework": [], // no containers, kubernetes, or slurm
           "q-backups": ["backups-true"]
         }
      } */
   ]

const questions = [
      {
         "title": "Do you know the kind of resource you are looking for?",
         "id": "q-kind",
         "description": "Select one or more kinds of resources.",
         "required": false,
         "type": "multiple-choice",
         "options": [
            {
               "name": "Storage",
               "id": "kind-storage"
            },
            {
               "name": "Service",
               "id": "kind-service"
            },
            {
               "name": "Compute",
               "id": "kind-compute"
            },
            {
               "name": "Cloud",
               "id": "kind-cloud"
            },
            {
               "name": "Network",
               "id": "kind-network"
            },
            {
               "name": "HPC",
               "id": "kind-hpc"
            }
         ]
      },
      {
         "title": "Are you looking for a service?",
         "id": "q-service",
         "description": "Select one or more services.",
         "required": false,
         "type": "multiple-choice",
         "options": [
            {
               "name": "Software Engineering",
               "id": "service-software"
            },
            {
               "name": "End-to-End Performance",
               "id": "service-endtoend"
            },
            {
               "name": "High Performance Computing (HPC)",
               "id": "service-hpc"
            }
         ]
      },
      {
         "title": "Who is the resource for?",
         "id": "q-who",
         "description": "Select one or more groups that the resource is needed for.",
         "required": false,
         "type": "multiple-choice",
         "options": [
            {
               "name": "faculty",
               "id": "who-faculty"
            },
            {
               "name": "staff",
               "id": "who-staff"
            },
            {
               "name": "student",
               "id": "who-student"
            }
         ]
      },
/*      {
         "title": "Is the intended user associated with a specific domain or department?",
         "id": "q-domain",
         "description": "If applicable, select an associated domain or department.",
         "required": false,
         "type": "multiple-choice",
         "options": [
            {
               "name": "bioinformatics",
               "id": "domain-bioinformatics"
            },
            {
               "name": "fluid dynamics",
               "id": "domain-fluid-dynamics"
            },
            {
               "name": "material science",
               "id": "domain-material-science"
            },
            {
               "name": "math/statistics",
               "id": "domain-math-statistics"
            },
            {
               "name": "economics",
               "id": "domain-economics"
            }
         ]
      },
*/
      {
         "title": "What size of resource are you looking for?",
         "id": "q-size",
         "description": "If applicable, give an approximate scale of resource",
         "required": false,
         "type": "minimum-choice",
         "options": [
            {
               "name": "Small (GB-Scale, 1-10Gbps, Small Cores/RAM, etc)",
               "id": "size-small-1"
            },
            {
               "name": "Medium (TB-Scale, 10-40Gbps, Medium Cores/RMA, etc)",
               "id": "size-medium-2"
            },
            {
               "name": "Large (PB-Scale, 40+Gbps, Large Cores/RAM, etc)",
               "id": "size-large-3"
            }
         ]
      },
/*      {
         "title": "Are you looking for a particular framework or job manager?",
         "id": "q-framework",
         "description": "Choose one or more frameworks that you would like to use.",
         "required": false,
         "type": "multiple-choice",
         "options": [
            {
               "name": "kubernetes",
               "id": "framework-kubernetes"
            },
            {
               "name": "containers",
               "id": "framework-containers"
            },
            {
               "name": "slurm",
               "id": "framework-slurm"
            }
         ]
      },
*/
      {
         "title": "Are you working with data that is considered protected or sensitive? (PII/HIPAA/etc)",
         "id": "q-sensitive",
         "description": "Some or all of your data could be considered sensitive or protected.",
         "required": false,
         "type": "single-choice",
         "options": [
            {
               "name": "Yes. sensitive/protected.",
               "id": "sensitive-true"
            },
            {
               "name": "No. Nothing sensitive/protected.",
               "id": "sensitive-false"
            }
         ]
      },
      {
         "title": "Do you want snapshots?",
         "id": "q-snapshots",
         "description": "A read-only image to reflect the state of your files.",
         "required": false,
         "type": "single-choice",
         "options": [
            {
               "name": "snapshots",
               "id": "snapshots-true"
            },
            {
               "name": "no snapshots",
               "id": "snapshots-false"
            }
         ]
      }
   ]

new Vue ({
  el: '#app',
  data: {
    resources,
    questions,
    lookup: null,             // question lookup
    resource_lookup: null,    // resource lookup
    choices: Object()
  },

  // Create a lookup dictionary of questions and resources
  mounted() {
    lookup = Object()
    resource_lookup = Object()

    $.each(this.questions, function(i, question){
       lookup[question.id] = question;
    });
    $.each(this.resources, function(i, resource){
       resource_lookup[resource.id] = resource;
    });

    this.lookup = lookup;
    this.resource_lookup = resource_lookup;
  },

  methods: {

    // Helper functions
    getRandomColor: function() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },

    // Clear all selections to start over 
    resetOptions: function(event) {
        $.each($(".question option:selected"), function () {
            $(this).prop('selected', false);
        });
        this.choices = Object();
        this.calculateChoices(this.choices, this.lookup);
    },

    filterOptions: function(event) {
        var question_id = event.target.id;
      
        // For multiple select, we need all of them
        var attribute = $('#' + question_id).val();
 
        // Update choices
        this.choices[question_id] = attribute;
        this.calculateChoices(this.choices, this.lookup);

    },

    // Based on content in this.choices, adjust resources shown
    calculateChoices: function(choices, lookup) {

        // loop through resources, and assess choices for each 
        $.each(this.resources, function(i, resource){

            // default is true (selected, or leave showing)
            var selected = true;

            $.each(choices, function(question_id, values) {
                var question = lookup[question_id];

                // Only assess if the key is defined as an attribute
                if (question.id in resource.attributes) {

                    if (question.type == "multiple-choice" || question.type == 'single-choice'){
 
                        // If any attribute is not in list, don't show it
                        $.each(values, function(ii, value) {
                            if ($.inArray(value, resource.attributes[question.id]) == -1) {
                                console.log(value + ' is not in ' + resource.attributes[question.id]);
                                selected = false;
                             }
                        });

                    } else if (question.type == "minimum-choice" || question.type == "maximum-choice"){
  
                        // We should only have one value
                        var ranking = values.split('-');
                        ranking = parseInt(ranking[ranking.length -1]);

                        // Compare to the resource ranking
                        var resource_ranking = resource.attributes[question.id][0].split('-');
                        resource_ranking = parseInt(resource_ranking[resource_ranking.length -1]);

                        // If the resource is less than the chosen, hide it
                        if (question.type == "minimum-choice") {
                            if (resource_ranking < ranking) {
                                selected = false;
                            }

                        // If the resource is greater than the chosen, hide it
                        } else {
                            if (resource_ranking > ranking) {
                                selected = false;
                            }
                        }
                    } else {
                         console.log('Unrecognized question type ' + question.type);
                    }
                }
            });

            console.log("Resource " + resource.title + " selected is " + selected);
            if (selected == true) {
                $("#" + resource.id).show();
            } else {
                $("#" + resource.id).hide();
            }
        });            
    }
  }
})

$('.list-group-item').mouseover(function() {
   $(this).addClass('active');
})
$('.list-group-item').mouseout(function() {
   $(this).removeClass('active');
})
