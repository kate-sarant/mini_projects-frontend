<?php
 include_once('header.php');

?>
<hr>
      <div class="main_info">
                  <div class="wrapper_teachers">

                    <h5>Dance Teachers: Panagiotis Zafiris |<br>
                       07405436918, Katholiky Mougios and Armida-Irene Gjindali</h5>
                  </div>

                  <div class="label_info">
                    <h1>Classes</h1>
                  </div>
                  <div class="book_message">
                    <h2>Don't wait & enjoy our greek dancing team !</h2>
                   </div>
                  <div class="wrapper_form_classes">

                        <form class="form-control-lg"  method="POST " id="form_bookaclass">
                          <h2>Book your next class now.</h2>
                              <div class="form-group row">
                                      <label for="staticEmail"  class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="text"  class="form-control" id="staticEmail" value="email@example.com" required>
                                    </div>
                              </div>
                          <div id="fullname" class="form-group row">
                                  <label for="name" class="col-sm-2 col-form-label">Name</label>
                                  <div class="col-sm-10">
                                      <input type="name" class="form-control" id="inputName" placeholder="Name" required>
                                  </div>
                                  <label for="lastname" class="col-sm-2 col-form-label">Lastname</label>
                                  <div class="col-sm-10">
                                      <input type="lastname" class="form-control" id="inputlastname" placeholder="Lastname" required>
                                  </div>
                          </div>
                          <div class="select">
                                  <label for="text" class="col-form-label">
                                      <p>How many people will you bring? (Optional)</p>
                                  </label>
                                  <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Just me</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>

                                  <div class="form-group">
                                      <label for="exampleFormControlTextarea1">Any comments or questions ? (Optional)
                                      </label>
                                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="button"class="btn btn-secondary btn-lg" name="button"> Submit</button>
                          </div>

                        </form>

                        <section class="main_wrapper">

                          <div class="cart">
                          <div class="font">
                            <i class="fa fa-car fa-4x" aria-hidden="true"></i>
                          </div>
                          <div class="cart_labels">
                            <h3>Parking</h3>
                            <p>Free on premises.</p>
                          </div>
                        </div>
                          <div class="cart">
                            <div class="font">
                              <i class="fa fa-clock-o fa-4x" aria-hidden="true"></i>
                            </div>
                            <div class="cart_labels">
                              <h3>Class Duration</h3>
                                <p>90 minutes.</p>
                            </div>
                          </div>
                          <div class="cart">
                            <div class="font">
                              <img src="noun_dance_21579 (1).png" alt="">
                            </div>
                            <div class="cart_labels">
                            <h4>Cost</h4>
                            <p>£5/class for adults,  <br> £2.5/classfor minors (Please bring cash notes)</p>
                            </div>
                          </div>

                        </section>

                  </div>
      </div>

<?php include_once("footer.php");?>









<!--

Cost:
Parking: Free on premises.

Dance Teachers: Panagiotis Zafiris | 07405436918, Katholiky Mougios and Armida-Irene Gjindali -->
