<?php
 include_once('header.php');?>

<div class="main-about-us">


<hr>
        <div class="main-area_aboutUs">
            <div class="">
                <h1>Contact us</h1>
            </div>
                  <div class="forms_background">


                        <section class="contact_form">

                                        
                                <form class="form-control-lg" id="form-control_cont-us" method="POST" action="about_us.php" >
                                  <!-- email -->
                                          <div class="form-group row">
                                              <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                              <div class="col-sm-10">
                                                  <input type="text"  class="form-control "  name ="mail" id="staticEmail" value="email@example.com" required>
                                              </div>
                                        </div>
                                        <!-- name -->
                                        <div id="fullname" class="form-group row">

                                              <label for="name" class="col-sm-2 col-form-label" required>Name</label>
                                              <div class="col-sm-10">
                                                  <input type="name" name="name" class="form-control" id="inputName" placeholder="Name">
                                              </div>
                                              <!-- lastname -->
                                              <label for="lastname" class="col-sm-2 col-form-label"   required>Lastname</label>
                                              <div class="col-sm-10">
                                                  <input type="lastname" class="form-control" id="inputlastname" name="lastname" placeholder="Lastname"required>
                                              </div>
                                        </div>
                                        <div class="select">
                                          <!-- anyquestions -->
                                        <div class="form-group">
                                          <label for="exampleFormControlTextarea1">Any comments or questions ?</label>
                                              <textarea class="form-control " name "message" id="about_us_Textarea1"  placeholder="Message..." rows="4" required></textarea>
                                        </div>
                                        <button type="submit" class="btn btn-secondary btn-lg" name="submit"> Submit</button>
                                        </div>
                                </form>

                        </section>
                  </div>
          </div>
    <hr>
</div>


<?php include_once("footer.php");?>
